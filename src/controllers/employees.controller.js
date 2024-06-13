import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('select * from employee')
  res.json(rows)
  res.send(rows)
}

export const getByIdEmployee = async (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

  if(rows.length <= 0) return res.status(404).json({
    message: 'Employee not found'
  })
  res.json(rows[0]);
}

export const postEmployees = async (req, res) => {
  const {name, salary} = req.body;
  const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);

  res.send({
    id: rows.insertId,
    name,
    salary,
  })
}

export const putEmployees = async (req, res) => {
  const {id} = req.params;
  const {name, salary} = req.body;
  console.log(id, name, salary);

  const [result] = await pool.query('UPDATE employee SET name = IFNULL(?), salary = IFNULL(?) WHERE id = ?', [name, salary, id]);

  console.log(result);

  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: 'Employee not found'
    })
  }

  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

  res.send(rows[0]);
}

export const deleteemployees = async (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

  if(result.affectedRows <= 0){
    return res.status(404).json({
      message: 'Employee not found'
    })
  }
    res.sendStatus(204);

}
