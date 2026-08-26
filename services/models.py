

# Create your models here.
from django.db import models

class ComprehensiveService(models.Model):
    """Dynamic Model for 'Our Comprehensive Services' cards"""
    step_number = models.CharField(max_length=10, help_text="e.g., 01, 02, 03, 04")
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='comprehensive_services/')

    def __str__(self):
        return f"{self.step_number} - {self.title}"