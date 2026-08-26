

# Create your models here.
from django.db import models

class JobOpportunity(models.Model):
    """Dynamic Model for the 'Current Opportunities' table"""
    job_title = models.CharField(max_length=200)
    department = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    job_type = models.CharField(max_length=100, default="Full Time")
    
    # Ordering (optional, to control which jobs appear first)
    sort_order = models.IntegerField(default=0, help_text="Lower numbers appear first")

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return self.job_title