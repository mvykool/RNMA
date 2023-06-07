using Microsoft.EntityFrameworkCore;

namespace RNMA.Data
{
    internal sealed class AppDbContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data source=./Data/AppDb.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] postToSeed = new Post[6];

            for(int i = 1; i <= 6; i++)
            {
                postToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Title = $"Post {i}",
                    Content = $"this is post {i}"
                };
            }

            modelBuilder.Entity<Post>().HasData(postToSeed);
        }
    }
}
