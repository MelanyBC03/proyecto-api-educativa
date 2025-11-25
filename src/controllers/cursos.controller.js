let cursos = [
  { id: 1, nombre: "Matemáticas I", codigo: "ABC123" }
];

exports.listarCursos = (req, res) => res.json(cursos);

exports.obtenerCurso = (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  return curso
    ? res.json(curso)
    : res.status(404).json({ msg: "Curso no encontrado" });
};

exports.crearCurso = (req, res) => {
  const nuevo = { id: cursos.length + 1, ...req.body };
  cursos.push(nuevo);
  res.json(nuevo);
};

exports.actualizarCurso = (req, res) => {
  const index = cursos.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ msg: "No existe" });

  cursos[index] = { ...cursos[index], ...req.body };
  res.json(cursos[index]);
};

exports.eliminarCurso = (req, res) => {
  cursos = cursos.filter(c => c.id != req.params.id);
  res.json({ msg: "Curso eliminado" });
};
