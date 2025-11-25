const router = require("express").Router();
const controller = require("../controllers/cursos.controller");
const auth = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Endpoints relacionados con cursos
 */

router.get("/", auth, controller.listarCursos);
router.get("/:id", auth, controller.obtenerCurso);
router.post("/", auth, controller.crearCurso);
router.put("/:id", auth, controller.actualizarCurso);
router.delete("/:id", auth, controller.eliminarCurso);

// 10 endpoints requeridos
router.get("/:id/notas", auth, (req, res) => res.json({ msg: "Notas del curso" }));
router.post("/:id/notas", auth, (req, res) => res.json({ msg: "Nota creada" }));

router.get("/:id/galeria", auth, (req, res) => res.json({ msg: "Fotos del curso" }));
router.post("/:id/galeria", auth, (req, res) => res.json({ msg: "Foto subida" }));

router.get("/:id/anuncios", auth, (req, res) => res.json({ msg: "Anuncios del curso" }));

module.exports = router;
