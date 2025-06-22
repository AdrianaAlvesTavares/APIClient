from django.db import models

# Create your models here.

class Cliente (models.Model):
    nome = models.CharField(max_length=100)
    ID_Cliente = models.AutoField(primary_key=True)
    CNH = models.CharField(max_length=20)
    CPF = models.CharField(max_length=11)
