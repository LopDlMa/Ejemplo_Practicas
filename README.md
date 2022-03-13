# INFORMACION:

A la hora de hacer commit de APIS o frontend recordar crear un archivo llamado exactamente .gitignore
y agregarle la carpeta  /node_modules para no sobrecargar el repositorio


## Algunas herramientas de node:

+ Nodemon:

Es una herramienta que ayuda a el desarrollo en node.js, automaticamente reinicia la aplicación cuando detecta cambios en el archivo. No requiere cambios al código. 

¿ Cómo se usa?

En el directorio donde se encuentre el archivo en el que se está trabajando:

<code> npm install -g nodemon </code>
<code>
<br>
 <br>
  nodemon [your node app]

</code>

Si el sistema dice que no está habilitado para ejecución de scripts:

+ Abrir el powershell como administrador
+ <code> Get-ExecutionPolicy </code>
Si el resultado es Restricted:
+ <code> Set-ExecutionPolicy Unrestricted </code>

