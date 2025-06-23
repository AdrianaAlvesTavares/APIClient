
# API de Cliente - Django REST Framework

Esta é uma API desenvolvida com Django REST Framework para gerenciamento de clientes.

## 🚀 Tecnologias Utilizadas

- Python 3.x
- Django
- Django REST Framework
- MySQL

## 🔧 Funcionalidades

- Criar cliente (POST `/api/clientes/`)
- Listar clientes (GET `/api/clientes/`)
- Ver um cliente (GET `/api/clientes/<id>/`)
- Atualizar cliente (PUT/PATCH `/api/clientes/<id>/`)
- Deletar cliente (DELETE `/api/clientes/<id>/`)

## 💾 Modelo de Dados

| Campo        | Tipo      | Descrição                     |
|--------------|-----------|-------------------------------|
| ID_Cliente   | int       | Chave primária auto           |
| nome         | string    | Nome do cliente               |
| cnh          | string    | CNH do cliente                |
| cpf          | string    | CPF do cliente                |

## ▶️ Como Executar Localmente

```bash
git clone 
cd APIClient
python3 -m venv venv \\linux
python -m venv venv \\para windows
source venv/bin/activate \\para windows
pip install django
pip install djangorestfraework
pip install -r requirements.txt \\usei pip freeze > requirements.txt
python manage.py migrate
python manage.py runserver
mudar na pasta settings.py:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
