function showPage(pageName)
{
    $("#pageContent").load("pages/" + pageName + ".php");

}

function bindLinks()
{
    $("#home").click(function()
    {
        showPage("home");
    });

    $("#ragdoll").click(function()
    {
        showPage("ragdoll");
    });

    $("#norwegian").click(function()
    {
        showPage("norwegianForestCat");
    });

    $("#british").click(function()
    {
        showPage("britishShorthair");
    });

    $("#siamese").click(function()
    {
        showPage("siamese");
    });
}




$(document).ready(function()
{
    bindLinks();
});
