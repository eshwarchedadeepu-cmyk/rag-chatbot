import fs from "fs";
import path from "path";

export async function retrieveContext(query: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "data", "knowledge.txt");
    const data = fs.readFileSync(filePath, "utf-8");

    const lines = data.split("\n");

    const matched = lines.filter(line =>
      line.toLowerCase().includes(query.toLowerCase())
    );

    if (matched.length === 0) {
      return "No relevant context found in knowledge base.";
    }

    return matched.join("\n");
  } catch (error) {
    console.error("RAG Error:", error);
    return "Error reading knowledge base.";
  }
}
