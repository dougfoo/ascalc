from django.urls import path

from . import views

urlpatterns = [
    # ex: /calcapp/
    path('', views.index, name='index'),
    # ex: /calcapp/bundle_name/bundle/
    path('<bundle_name>/bundle/', views.bundle, name='bundle'),
    # ex: /calcapp/resource_name/resource/
    path('<resource_name>/resource/', views.resource, name='resource'),
]

