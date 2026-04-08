import path from 'path'
import { parse } from 'csv-parse/sync'
import fs from 'fs'


export function readCSVData(filePath: string): Array<Record<string, any>> {
    const absolutePath = path.resolve(__dirname, "..", filePath)
    const fileContent = fs.readFileSync(absolutePath, "utf-8")
    return parse(fileContent, {
        skip_empty_lines: true,
        columns: true,
        trim: true
    })

}
