async function performTask(): Promise<string> {
return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Task executed successfully");
        }, 1000);
    });
}
async function executeTask(): Promise<void> {
    try {
        const message = await performTask(); 
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
executeTask()
