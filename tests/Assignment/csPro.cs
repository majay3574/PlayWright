using Microsoft.Playwright;
using System;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false // Set to true for headless mode
        });

        var context = await browser.NewContextAsync();
        var page = await context.NewPageAsync();

        await page.GotoAsync("https://playwright.dev/dotnet/");
        Console.WriteLine("Page title: " + await page.TitleAsync());

        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "screenshot.png" });

        await browser.CloseAsync();

        await page.WaitForSelectorAsync("#element", new() { State = WaitForSelectorState.Attached });

    }
}