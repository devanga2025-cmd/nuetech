from django.db import models

class SolutionCard(models.Model):
    """Model for the 'Our Solutions' cards (Dark Background)"""
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    image = models.ImageField(upload_to='solutions/') 
    
    # REMOVED: link_url field
    
    def __str__(self):
        return self.title

class NewsUpdate(models.Model):
    """Model for the 'News & Updates' cards (Light Background)"""
    title = models.CharField(max_length=150)
    date = models.DateField()
    excerpt = models.TextField(max_length=200) 
    image = models.ImageField(upload_to='news/')
    # REMOVED: link_url field
    
    def __str__(self):
        return self.title