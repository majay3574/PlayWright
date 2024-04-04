enum Environment {
    Local = "local",
    Development = "development",
    Staging = "staging",
    Production = "production",
}

const runTests = (env: Environment): void => {
    console.log(`Running tests on the ${env} environment.`);
};

runTests(Environment.Development)