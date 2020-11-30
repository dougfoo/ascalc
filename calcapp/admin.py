from django.contrib import admin
from .models import Bundle, Resource, Membership, Project

# Register your models here.

admin.site.register(Bundle)
admin.site.register(Resource)
admin.site.register(Membership)
admin.site.register(Project)

