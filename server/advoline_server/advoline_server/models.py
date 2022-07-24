
from django.db import models

def upload_path(instance, filename):
     return '/'.join(['covers', str(instance.title), filename])

class AdvolineDB(models.Model):
     id = models.AutoField(primary_key=True)
     name = models.CharField(max_length=50)
     email = models.CharField(max_length=50)
     story = models.TextField()
     LawyerType = models.CharField(max_length=50)
     check_premission= models.BooleanField(default=False)
     user_comments = models.TextField(default="")
     user_phone_number  = models.CharField(default=0, max_length=12)
     title1 = models.CharField(max_length=100)
     image1 = models.ImageField(default=None , upload_to='post_images')

     title2 = models.CharField(default="", max_length=100)
     image2 = models.ImageField(default=None , upload_to='post_images')

     title3 = models.CharField(default="", max_length=100)
     image3 = models.ImageField(default=None , upload_to='post_images')



def __str__(self):
     return '%s' % self.title
