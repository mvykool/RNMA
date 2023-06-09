using RNMA.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//endpoints
app.MapGet("/get-all-posts", async () => await PostRepository.GetPostsAsync());

//GET with ID

app.MapGet("/get-post-by-id/{postId}", async (int postId) =>
{
    Post postToReturn = await PostRepository.GetPostByIdAsync(postId);

    if (postToReturn != null)
    {
        return Results.Ok(postToReturn);
    }
    else
    {
        return Results.BadRequest();
    }
});

//POST create post

app.MapPost("/create-post", async (Post postToCreate) =>
{
    bool createSuccessful = await PostRepository.CreatePostAsync(postToCreate);

    if (createSuccessful)
    {
        return Results.Ok("created successfully");
    }
    else
    {
        return Results.BadRequest();
    }
});

//PUT update post

app.MapPut("/update-post", async (Post postToUpdate) =>
{
    bool updateSuccessful = await PostRepository.UpdatePostAsync(postToUpdate);

    if (updateSuccessful)
    {
        return Results.Ok("updated successfully");
    }
    else
    {
        return Results.BadRequest();
    }
});

//DELETE delete post

app.MapDelete("/delete-post-by-id/{postId}", async (int postId) =>
{
    bool deleteSuccessful = await PostRepository.DeletePostAsync(postId);

    if (deleteSuccessful)
    {
        return Results.Ok("deleted successfully");
    }
    else
    {
        return Results.BadRequest();
    }
});


app.Run();

