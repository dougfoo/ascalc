from django.db import models

class Resource(models.Model):
    class Meta:
        ordering = ['role']
    
    def __str__(self):
        return self.role

    nameid = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    title = models.CharField(max_length=200)


class Bundle(models.Model):
    class Meta:
        ordering = ['nameid']
    
    def __str__(self):
        return self.nameid

    nameid = models.CharField(max_length=200)
    size = models.CharField(max_length=50)
    months = models.IntegerField(default=0)
    resources = models.ManyToManyField(Resource)
#    pm = models.ForeignKey(Resource, on_delete=models.CASCADE)
#    de = models.ForeignKey(Resource, on_delete=models.CASCADE)
#    ds = models.ForeignKey(Resource, on_delete=models.CASCADE)
#    ap = models.ForeignKey(Resource, on_delete=models.CASCADE)

