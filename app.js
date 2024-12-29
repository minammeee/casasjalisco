<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Publicar Casa</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="register.html">Registrarse</a></li>
        <li><a href="publish.html">Publicar Casa</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <h1>Formulario para Publicar Casa</h1>
    <form id="publish-form">
      <label for="title">Título de la casa:</label>
      <input type="text" id="title" required>
      
      <label for="description">Descripción:</label>
      <textarea id="description" required></textarea>
      
      <label for="price">Precio:</label>
      <input type="text" id="price" required>
      
      <label for="image">Imagen URL:</label>
      <input type="url" id="image" required>
      
      <button type="submit">Publicar Casa</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2024 Subasta de Casas Guadalajara, Jalisco</p>
  </footer>

  <script>
    document.getElementById('publish-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const price = document.getElementById('price').value;
      const image = document.getElementById('image').value;
      
      console.log(`Casa publicada: ${title}, ${description}, ${price}`);
      alert("¡Casa publicada exitosamente!");
      
      // Lógica adicional para guardar en base de datos o mostrar en la página principal
    });
  </script>
</body>
</html>
