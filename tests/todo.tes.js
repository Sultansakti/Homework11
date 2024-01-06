const app = require('../app');
const request = require('supertest');

describe('Todo Routes', () => {
    // Test for getting all todos
    it('should return all todos GET /todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .then(response => {
                const firstData = response.body[0];
                expect(firstData.title).toBe('Learn Sequelize');
                done();
            })
            .catch(done);
    })});

    it('should return a specific todo by ID GET /todos/:id', (done) => {
        const todoId = 4;

        request(app)
            .get(`/todos/${todoId}`)
            .expect(200)
            .then(response => {
                const todo = response.body;
                expect(todo.title).toBe('Learn Sequelize'); // Replace with the actual title of the todo with ID 1
                done();
            })
            .catch(done);
    });

    it('should return a specific todo by ID GET /todos/:id', (done) => {
        
        const todoId = 5;

        request(app)
            .get(`/todos/${todoId}`)
            .expect(200)
            .then(response => {
                const todo = response.body;
                expect(todo.title).toBe('Learn Express');
                done();
            })
            .catch(done);
    });


    it('should create a new todo POST /todos', (done) => {
        const newTodo = {
            title: 'Learn JS',
            status: 'active',
        };
    
        request(app)
            .post('/todos')
            .send(newTodo)
            .expect(201)
            .then(response => {
                const createdTodo = response.body;
                expect(createdTodo.title).toBe('Learn JS');
                expect(createdTodo.status).toBe('active');
                const createdTodoId = createdTodo.id;
    
                done();
            })
            .catch(done);
    });