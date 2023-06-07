using System.ComponentModel.DataAnnotations;

namespace RNMA.Data
{
    internal sealed class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(length: 1000)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(length: 10000)]
        public string Content { get; set; } = string.Empty;
    }
}
