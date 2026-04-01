#!/usr/bin/env node

const { Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, BorderStyle, TabStopPosition, TabStopType, convertInchesToTwip } = require('docx');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const { cvData, config } = require('./data.js');

const COLORS = {
    primary: '2563EB',
    dark: '1E293B',
    secondary: '475569',
    muted: '64748B',
    accent: '06D6A0',
    line: 'CBD5E1',
};

// ============================================
// WORD GENERATION
// ============================================

function divider() {
    return new Paragraph({
        spacing: { before: 80, after: 80 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.line },
        },
    });
}

function sectionTitle(text) {
    return new Paragraph({
        spacing: { before: 280, after: 120 },
        children: [
            new TextRun({
                text: text.toUpperCase(),
                bold: true,
                size: 22,
                color: COLORS.primary,
                font: 'Calibri',
            }),
        ],
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.primary },
        },
    });
}

function buildHeader() {
    const { personal } = cvData;
    const imageBuffer = fs.readFileSync(path.resolve(__dirname, personal.profileImage));

    return [
        // Profile image centered
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
                new ImageRun({
                    data: imageBuffer,
                    transformation: { width: 100, height: 100 },
                    type: 'jpg',
                }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({
                    text: personal.name,
                    bold: true,
                    size: 36,
                    color: COLORS.dark,
                    font: 'Calibri',
                }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
                new TextRun({
                    text: personal.title,
                    size: 24,
                    color: COLORS.primary,
                    font: 'Calibri',
                }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
                new TextRun({ text: personal.email, size: 19, color: COLORS.secondary, font: 'Calibri' }),
                new TextRun({ text: '  |  ', size: 19, color: COLORS.muted, font: 'Calibri' }),
                new TextRun({ text: personal.phone, size: 19, color: COLORS.secondary, font: 'Calibri' }),
                new TextRun({ text: '  |  ', size: 19, color: COLORS.muted, font: 'Calibri' }),
                new TextRun({ text: personal.location, size: 19, color: COLORS.secondary, font: 'Calibri' }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
                ...(cvData.social.linkedin ? [
                    new TextRun({ text: 'LinkedIn: ', size: 19, color: COLORS.muted, font: 'Calibri' }),
                    new TextRun({ text: cvData.social.linkedin, size: 19, color: COLORS.primary, font: 'Calibri' }),
                ] : []),
            ],
        }),
        divider(),
    ];
}

function buildSummary() {
    return [
        sectionTitle('Summary'),
        new Paragraph({
            spacing: { after: 60 },
            children: [
                new TextRun({
                    text: cvData.personal.summary,
                    size: 20,
                    color: COLORS.dark,
                    font: 'Calibri',
                }),
            ],
        }),
    ];
}

function buildExperience() {
    const paragraphs = [sectionTitle('Experience')];

    cvData.experience.forEach((exp, i) => {
        const contractLabel = exp.type === 'contract' ? ' (Contract)' : '';

        paragraphs.push(new Paragraph({
            spacing: { before: i > 0 ? 200 : 80, after: 20 },
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            children: [
                new TextRun({
                    text: exp.position,
                    bold: true,
                    size: 21,
                    color: COLORS.dark,
                    font: 'Calibri',
                }),
                new TextRun({
                    text: `  —  ${exp.company}${contractLabel}`,
                    size: 21,
                    color: COLORS.secondary,
                    font: 'Calibri',
                }),
                new TextRun({ text: '\t', font: 'Calibri' }),
                new TextRun({
                    text: `${exp.startDate} – ${exp.endDate}`,
                    size: 19,
                    color: COLORS.muted,
                    font: 'Calibri',
                }),
            ],
        }));

        if (exp.projectName) {
            paragraphs.push(new Paragraph({
                spacing: { after: 40 },
                children: [
                    new TextRun({
                        text: `Project: ${exp.projectName}`,
                        italics: true,
                        size: 19,
                        color: COLORS.muted,
                        font: 'Calibri',
                    }),
                ],
            }));
        }

        if (exp.highlights) {
            exp.highlights.forEach(h => {
                paragraphs.push(new Paragraph({
                    spacing: { after: 30 },
                    indent: { left: convertInchesToTwip(0.25) },
                    children: [
                        new TextRun({ text: '•  ', size: 19, color: COLORS.primary, font: 'Calibri' }),
                        new TextRun({ text: h, size: 19, color: COLORS.dark, font: 'Calibri' }),
                    ],
                }));
            });
        }

        if (exp.technologies && exp.technologies.length) {
            paragraphs.push(new Paragraph({
                spacing: { before: 40, after: 20 },
                indent: { left: convertInchesToTwip(0.25) },
                children: [
                    new TextRun({ text: 'Tech: ', bold: true, size: 18, color: COLORS.muted, font: 'Calibri' }),
                    new TextRun({ text: exp.technologies.join('  ·  '), size: 18, color: COLORS.secondary, font: 'Calibri' }),
                ],
            }));
        }
    });

    return paragraphs;
}

function buildSkills() {
    const paragraphs = [sectionTitle('Skills')];

    const technicalSkills = Object.entries(cvData.skills).filter(
        ([cat]) => cat !== 'Product & Marketing'
    );

    technicalSkills.forEach(([category, skills]) => {
        paragraphs.push(new Paragraph({
            spacing: { before: 60, after: 30 },
            children: [
                new TextRun({ text: `${category}: `, bold: true, size: 19, color: COLORS.dark, font: 'Calibri' }),
                new TextRun({ text: skills.join(',  '), size: 19, color: COLORS.secondary, font: 'Calibri' }),
            ],
        }));
    });

    return paragraphs;
}

function buildSideProjects() {
    const paragraphs = [sectionTitle('Side Projects')];

    cvData.sideProjects.forEach((project, i) => {
        paragraphs.push(new Paragraph({
            spacing: { before: i > 0 ? 140 : 80, after: 20 },
            children: [
                new TextRun({ text: project.name, bold: true, size: 21, color: COLORS.dark, font: 'Calibri' }),
                new TextRun({ text: `  —  ${project.role}`, size: 21, color: COLORS.secondary, font: 'Calibri' }),
                new TextRun({ text: `  [${project.status}]`, size: 19, color: project.status === 'Released' ? COLORS.accent : COLORS.primary, font: 'Calibri' }),
            ],
        }));

        const shortDesc = project.description.split('. ').slice(0, 2).join('. ') + '.';
        paragraphs.push(new Paragraph({
            spacing: { after: 30 },
            indent: { left: convertInchesToTwip(0.25) },
            children: [
                new TextRun({ text: shortDesc, size: 19, color: COLORS.dark, font: 'Calibri' }),
            ],
        }));

        paragraphs.push(new Paragraph({
            spacing: { after: 20 },
            indent: { left: convertInchesToTwip(0.25) },
            children: [
                new TextRun({ text: 'Tech: ', bold: true, size: 18, color: COLORS.muted, font: 'Calibri' }),
                new TextRun({ text: project.technologies.join('  ·  '), size: 18, color: COLORS.secondary, font: 'Calibri' }),
            ],
        }));

        if (project.links && project.links.website) {
            paragraphs.push(new Paragraph({
                spacing: { after: 20 },
                indent: { left: convertInchesToTwip(0.25) },
                children: [
                    new TextRun({ text: project.links.website, size: 18, color: COLORS.primary, font: 'Calibri' }),
                ],
            }));
        }
    });

    return paragraphs;
}

function buildEducation() {
    const paragraphs = [sectionTitle('Education & Certifications')];

    cvData.education.forEach((edu, i) => {
        paragraphs.push(new Paragraph({
            spacing: { before: i > 0 ? 80 : 40, after: 10 },
            children: [
                new TextRun({ text: edu.degree, bold: true, size: 20, color: COLORS.dark, font: 'Calibri' }),
                new TextRun({ text: `  —  ${edu.institution}`, size: 20, color: COLORS.secondary, font: 'Calibri' }),
            ],
        }));
        if (edu.description) {
            paragraphs.push(new Paragraph({
                spacing: { after: 20 },
                indent: { left: convertInchesToTwip(0.25) },
                children: [
                    new TextRun({ text: edu.description, size: 18, color: COLORS.muted, font: 'Calibri', italics: true }),
                ],
            }));
        }
    });

    return paragraphs;
}

function buildStrengths() {
    if (!cvData.strengths || !cvData.strengths.length) return [];

    const paragraphs = [sectionTitle('What I Bring')];

    // Two strengths per line, compact
    for (let i = 0; i < cvData.strengths.length; i += 2) {
        const left = cvData.strengths[i];
        const right = cvData.strengths[i + 1];
        const children = [
            new TextRun({ text: `${left.title}: `, bold: true, size: 19, color: COLORS.dark, font: 'Calibri' }),
            new TextRun({ text: left.description, size: 19, color: COLORS.secondary, font: 'Calibri' }),
        ];
        if (right) {
            children.push(new TextRun({ text: '     ', size: 19, font: 'Calibri' }));
            children.push(new TextRun({ text: `${right.title}: `, bold: true, size: 19, color: COLORS.dark, font: 'Calibri' }));
            children.push(new TextRun({ text: right.description, size: 19, color: COLORS.secondary, font: 'Calibri' }));
        }
        paragraphs.push(new Paragraph({
            spacing: { before: 40, after: 30 },
            children,
        }));
    }

    return paragraphs;
}

function buildLanguagesLine() {
    return [
        new Paragraph({
            spacing: { before: 200, after: 60 },
            children: [
                new TextRun({ text: 'Languages: ', bold: true, size: 19, color: COLORS.dark, font: 'Calibri' }),
                new TextRun({ text: 'Bulgarian (Native),  English (Fluent),  German (Basic)', size: 19, color: COLORS.secondary, font: 'Calibri' }),
            ],
        }),
    ];
}

async function generateWord() {
    const doc = new Document({
        styles: {
            default: {
                document: { run: { font: 'Calibri', size: 20 } },
            },
        },
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: convertInchesToTwip(0.6),
                        bottom: convertInchesToTwip(0.5),
                        left: convertInchesToTwip(0.7),
                        right: convertInchesToTwip(0.7),
                    },
                },
            },
            children: [
                ...buildHeader(),
                ...buildSummary(),
                ...buildExperience(),
                ...buildStrengths(),
                ...buildSkills(),
                ...buildSideProjects(),
                ...buildEducation(),
                ...buildLanguagesLine(),
            ],
        }],
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync('Vasil_Iliev_CV.docx', buffer);
    console.log('Generated: Vasil_Iliev_CV.docx');
}

// ============================================
// PDF GENERATION
// ============================================

function hexToRGB(hex) {
    return [
        parseInt(hex.substring(0, 2), 16),
        parseInt(hex.substring(2, 4), 16),
        parseInt(hex.substring(4, 6), 16),
    ];
}

function generatePDF() {
    return new Promise((resolve) => {
        const doc = new PDFDocument({
            size: 'A4',
            margins: { top: 40, bottom: 36, left: 50, right: 50 },
        });

        const stream = fs.createWriteStream('Vasil_Iliev_CV.pdf');
        doc.pipe(stream);

        const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
        const col = (hex) => hexToRGB(hex);

        // Register fonts
        doc.registerFont('Calibri', 'Calibri');
        doc.registerFont('Calibri-Bold', 'Calibri');

        const font = 'Helvetica';
        const fontBold = 'Helvetica-Bold';
        const fontItalic = 'Helvetica-Oblique';

        function checkPage(needed) {
            if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
                doc.addPage();
            }
        }

        // --- HEADER with photo ---
        const imagePath = path.resolve(__dirname, cvData.personal.profileImage);
        const imgSize = 80;
        const imgX = (pageWidth - imgSize) / 2 + doc.page.margins.left;
        doc.image(imagePath, imgX, doc.y, { width: imgSize, height: imgSize, fit: [imgSize, imgSize] });
        doc.y += imgSize + 10;

        doc.font(fontBold).fontSize(20).fillColor(col(COLORS.dark));
        doc.text(cvData.personal.name, { align: 'center' });
        doc.moveDown(0.15);

        doc.font(font).fontSize(12).fillColor(col(COLORS.primary));
        doc.text(cvData.personal.title, { align: 'center' });
        doc.moveDown(0.3);

        doc.font(font).fontSize(9).fillColor(col(COLORS.secondary));
        doc.text(`${cvData.personal.email}  |  ${cvData.personal.phone}  |  ${cvData.personal.location}`, { align: 'center' });
        if (cvData.social.linkedin) {
            doc.moveDown(0.15);
            doc.text(cvData.social.linkedin, { align: 'center', link: cvData.social.linkedin });
        }
        doc.moveDown(0.4);

        // Divider
        doc.moveTo(doc.page.margins.left, doc.y)
            .lineTo(doc.page.margins.left + pageWidth, doc.y)
            .strokeColor(col(COLORS.line)).lineWidth(0.5).stroke();
        doc.moveDown(0.5);

        // --- Section helper ---
        function pdfSectionTitle(title) {
            checkPage(30);
            doc.moveDown(0.4);
            doc.font(fontBold).fontSize(11).fillColor(col(COLORS.primary));
            doc.text(title.toUpperCase());
            const y = doc.y + 2;
            doc.moveTo(doc.page.margins.left, y)
                .lineTo(doc.page.margins.left + pageWidth, y)
                .strokeColor(col(COLORS.primary)).lineWidth(0.5).stroke();
            doc.y = y + 6;
        }

        // --- SUMMARY ---
        pdfSectionTitle('Summary');
        doc.font(font).fontSize(9.5).fillColor(col(COLORS.dark));
        doc.text(cvData.personal.summary, { lineGap: 2 });

        // --- EXPERIENCE ---
        pdfSectionTitle('Experience');

        cvData.experience.forEach((exp, i) => {
            checkPage(70);
            if (i > 0) doc.moveDown(0.5);

            const contractLabel = exp.type === 'contract' ? ' (Contract)' : '';
            const dates = `${exp.startDate} – ${exp.endDate}`;

            // Role line
            const roleText = `${exp.position}  —  ${exp.company}${contractLabel}`;
            doc.font(fontBold).fontSize(10).fillColor(col(COLORS.dark));
            const dateWidth = doc.widthOfString(dates, { font: font, size: 9 });
            doc.text(roleText, doc.page.margins.left, doc.y, { width: pageWidth - dateWidth - 10, continued: false });
            // Dates right-aligned on the same line
            doc.font(font).fontSize(9).fillColor(col(COLORS.muted));
            doc.text(dates, doc.page.margins.left, doc.y - doc.currentLineHeight() - 2, { width: pageWidth, align: 'right' });

            if (exp.projectName) {
                doc.font(fontItalic).fontSize(8.5).fillColor(col(COLORS.muted));
                doc.text(`Project: ${exp.projectName}`);
            }

            doc.moveDown(0.15);

            // Highlights
            if (exp.highlights) {
                exp.highlights.forEach(h => {
                    checkPage(20);
                    doc.font(font).fontSize(9).fillColor(col(COLORS.dark));
                    doc.text(`•  ${h}`, doc.page.margins.left + 14, doc.y, {
                        width: pageWidth - 14,
                        lineGap: 1,
                    });
                    doc.moveDown(0.1);
                });
            }

            // Tech
            if (exp.technologies && exp.technologies.length) {
                doc.moveDown(0.1);
                doc.font(fontBold).fontSize(8).fillColor(col(COLORS.muted));
                doc.text('Tech: ', doc.page.margins.left + 14, doc.y, { continued: true, width: pageWidth - 14 });
                doc.font(font).fillColor(col(COLORS.secondary));
                doc.text(exp.technologies.join('  ·  '));
            }
        });

        // --- SKILLS ---
        pdfSectionTitle('Skills');

        const technicalSkills = Object.entries(cvData.skills).filter(
            ([cat]) => cat !== 'Product & Marketing'
        );

        technicalSkills.forEach(([category, skills]) => {
            checkPage(18);
            doc.font(fontBold).fontSize(9).fillColor(col(COLORS.dark));
            doc.text(`${category}: `, { continued: true });
            doc.font(font).fillColor(col(COLORS.secondary));
            doc.text(skills.join(',  '));
            doc.moveDown(0.1);
        });

        // --- STRENGTHS ---
        pdfSectionTitle('What I Bring');

        if (cvData.strengths) {
            cvData.strengths.forEach(s => {
                checkPage(18);
                doc.font(fontBold).fontSize(9).fillColor(col(COLORS.dark));
                doc.text(`${s.title}: `, { continued: true });
                doc.font(font).fillColor(col(COLORS.secondary));
                doc.text(s.description);
                doc.moveDown(0.1);
            });
        }

        // --- SIDE PROJECTS ---
        pdfSectionTitle('Side Projects');

        cvData.sideProjects.forEach((project, i) => {
            checkPage(50);
            if (i > 0) doc.moveDown(0.4);

            doc.font(fontBold).fontSize(10).fillColor(col(COLORS.dark));
            doc.text(`${project.name}`, { continued: true });
            doc.font(font).fillColor(col(COLORS.secondary));
            doc.text(`  —  ${project.role}`, { continued: true });
            const statusColor = project.status === 'Released' ? COLORS.accent : COLORS.primary;
            doc.fillColor(col(statusColor));
            doc.text(`  [${project.status}]`);

            const shortDesc = project.description.split('. ').slice(0, 2).join('. ') + '.';
            doc.font(font).fontSize(9).fillColor(col(COLORS.dark));
            doc.text(shortDesc, doc.page.margins.left + 14, doc.y, { width: pageWidth - 14, lineGap: 1 });

            doc.moveDown(0.1);
            doc.font(fontBold).fontSize(8).fillColor(col(COLORS.muted));
            doc.text('Tech: ', doc.page.margins.left + 14, doc.y, { continued: true, width: pageWidth - 14 });
            doc.font(font).fillColor(col(COLORS.secondary));
            doc.text(project.technologies.join('  ·  '));

            if (project.links && project.links.website) {
                doc.font(font).fontSize(8).fillColor(col(COLORS.primary));
                doc.text(project.links.website, doc.page.margins.left + 14, doc.y, {
                    link: project.links.website,
                    width: pageWidth - 14,
                });
            }
        });

        // --- EDUCATION ---
        pdfSectionTitle('Education & Certifications');

        cvData.education.forEach((edu, i) => {
            checkPage(25);
            if (i > 0) doc.moveDown(0.15);
            doc.font(fontBold).fontSize(9.5).fillColor(col(COLORS.dark));
            doc.text(edu.degree, { continued: true });
            doc.font(font).fillColor(col(COLORS.secondary));
            doc.text(`  —  ${edu.institution}`);
            if (edu.description) {
                doc.font(fontItalic).fontSize(8).fillColor(col(COLORS.muted));
                doc.text(edu.description, doc.page.margins.left + 14, doc.y, { width: pageWidth - 14 });
            }
        });

        // --- LANGUAGES ---
        doc.moveDown(0.5);
        doc.font(fontBold).fontSize(9).fillColor(col(COLORS.dark));
        doc.text('Languages: ', { continued: true });
        doc.font(font).fillColor(col(COLORS.secondary));
        doc.text('Bulgarian (Native),  English (Fluent),  German (Basic)');

        doc.end();
        stream.on('finish', () => {
            console.log('Generated: Vasil_Iliev_CV.pdf');
            resolve();
        });
    });
}

// ============================================
// MAIN
// ============================================

async function main() {
    await generateWord();
    await generatePDF();
}

main().catch(console.error);
