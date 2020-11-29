from django.db import models

class Resource(models.Model):
    class Meta:
        ordering = ['role']
    
    def __str__(self):
        return self.role

    role = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    perdiem = models.IntegerField(default=150000)

class Bundle(models.Model):
    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

    name = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    months = models.IntegerField(default=3)
    members = models.ManyToManyField(Resource, through='Membership')

class Membership(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    bundle = models.ForeignKey(Bundle, on_delete=models.CASCADE)
    allocation = models.FloatField(default=0.4)

    def __str__(self):
        return 'membership'
