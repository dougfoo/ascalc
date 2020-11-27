# Generated by Django 3.1.3 on 2020-11-25 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calcapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bundle',
            options={'ordering': ['nameid']},
        ),
        migrations.AlterModelOptions(
            name='resource',
            options={'ordering': ['role']},
        ),
        migrations.RemoveField(
            model_name='bundle',
            name='jr',
        ),
        migrations.AddField(
            model_name='bundle',
            name='resources',
            field=models.ManyToManyField(to='calcapp.Resource'),
        ),
    ]