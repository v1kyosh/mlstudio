import { renderToStream } from "@react-pdf/renderer";
import { ResumeDocument } from "./resume-document";

export const runtime = "nodejs";

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export async function GET() {
  const stream = await renderToStream(<ResumeDocument />);
  const buffer = await streamToBuffer(stream);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="marcos-leite-resume.pdf"',
    },
  });
}
