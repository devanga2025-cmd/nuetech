

# Create your models here.
from django.db import models

class LatestNews(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='media_center/news/')
    category = models.CharField(max_length=50, help_text="e.g., Company News, Industry Insights, Technology")

    def __str__(self):
        return self.title

class MediaGallery(models.Model):
    image = models.ImageField(upload_to='media_center/gallery/')
    # Add this to mark if it's the main large image (True) or secondary grid image (False)
    is_secondary = models.BooleanField(default=False, help_text="Check if this image goes to the right side smaller grid")
    sort_order = models.IntegerField(default=0, help_text="Lower numbers appear first")

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return f"Gallery Image {self.id}"

class FeaturedVideo(models.Model):
    title = models.CharField(max_length=200)
    duration = models.CharField(max_length=20, help_text="e.g., 03:45")
    video_thumbnail = models.ImageField(upload_to='media_center/videos/')
    url = models.URLField(help_text="Link to the video (e.g., YouTube, Vimeo)")

    def __str__(self):
        return self.title