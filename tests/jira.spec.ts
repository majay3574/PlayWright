import axios from "axios";
import test  from "@playwright/test";

const endPointURL = "https://vidya-bharathi.atlassian.net/rest/api/3/issue";
const ProjectKey = "JAN";
const apiUsername = "vidyar1926@gmail.com";
const apiToken = "ATATT3xFfGF0o9Il-GXAzXbgMaUqc43VhYkO2qVQP6y7-7pD7DOpJAiR1Ru83l9m1Gldi4rrHTyVZDUG0ohBPx543hcCrL5pDh66kqZ6qnH7uhcqCoP4X-GOQU29q3PzYnrLPUAqb6F4PrvGYlMa-me3nMmdUnkgt-rKpssMqMWIlU7tSWR9KiM=EB88E30F";

export async function createIssue(summary, desc) {
    const issueBody = {
        fields: {
            project: {
                key: ProjectKey,
            },
            summary: summary,
            description: desc,
            issuetype: {
                name: "Bug",
            },
        },
    };

    try {
        const response = await axios.post(endPointURL, issueBody, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${Buffer.from(`${apiUsername}:${apiToken}`).toString('base64')}`,

            },
        });
        console.log("Issue created successfully:", response.status);
    } catch (error) {
        console.error("Error creating issue:", error.response ? error.response.data : error.message);
    }
}
test(`test jira`, async () => {
  await  createIssue("Jira", "Defect Logigg");
})