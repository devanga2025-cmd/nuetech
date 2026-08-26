

# Create your models here.
from django.db import models

class FounderVision(models.Model):
    """Dynamic content for the Founder's Vision section"""
    heading_prefix = models.CharField(max_length=100, help_text="Text before the green highlighted text (e.g., 'A Vision That')")
    heading_highlight = models.CharField(max_length=100, help_text="Green highlighted text (e.g., 'Powers Change')")
    
    paragraph_1 = models.TextField()
    paragraph_2 = models.TextField()
    
    # Main Founder Image
    founder_image = models.ImageField(upload_to='founder/')
    
    # Right Side Quote Box
    quote_text = models.TextField()
    quote_author = models.CharField(max_length=100, help_text="e.g., Arjun Reddy")
    quote_author_title = models.CharField(max_length=150, help_text="e.g., Founder & CEO, Nuetech Solar")
    
    # Button Link (Hardcoded in HTML, but Text is dynamic)
    button_text = models.CharField(max_length=100, default="Know More About Our Journey")

    def __str__(self):
        return f"{self.heading_prefix} {self.heading_highlight}"


class FeaturedProject(models.Model):
    """Dynamic cards for the Featured Projects section"""
    category = models.CharField(max_length=50, help_text="e.g., Residential, Commercial, Industrial, Utility Scale")
    title = models.CharField(max_length=150)
    location = models.CharField(max_length=100, help_text="e.g., Bengaluru, Karnataka")
    
    capacity = models.CharField(max_length=50, help_text="e.g., 10 kW")
    capacity_label = models.CharField(max_length=50, default="Capacity")
    
    year = models.CharField(max_length=4)
    year_label = models.CharField(max_length=50, default="Year")
    
    project_image = models.ImageField(upload_to='projects/')

    def __str__(self):
        return self.title