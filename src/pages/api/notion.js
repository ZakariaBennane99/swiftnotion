// Notion SDK
const { Client } = require('@notionhq/client')
// Notion to MD Package
const { NotionToMarkdown } = require("notion-to-md")
require('dotenv').config()


// const axios = require('axios')
// const qs = require('qs')


export default function handler(req, res) {

    const notion = new Client({ auth: process.env.NOTION_API_TOKEN })
    const n2m = new NotionToMarkdown({ notionClient: notion })

    if (req.method === 'GET') {
        (async () => {
            const pageId = '0a558d3d9d3749b6ba6541ed60c72c34'
            const response = await notion.pages.retrieve({ page_id: pageId })
            res.json(response)
        })()
    }

}
