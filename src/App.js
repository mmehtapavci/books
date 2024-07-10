import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './styles.css';

function App() {
    const [books, setBooks] = useState([]);

    // Kitapları API'den almak için kullanılan fonksiyon
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // Kitabı kimliğe göre düzenle fonksiyonu
    const editBookById = async (id, newTitle) => {
        try {
            const response = await axios.put(`http://localhost:3001/books/${id}`, {
                title: newTitle,
            });

            const updatedBooks = books.map((book) => {
                if (book.id === id) {
                    return { ...book, ...response.data };
                }
                return book;
            });
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error editing book:', error);
        }
    };

    // Kitabı sil fonksiyonu
    const deleteBookById = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/books/${id}`);

            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            });
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    // Kitap oluştur fonksiyonu
    const createBook = async (title) => {
        try {
            const response = await axios.post('http://localhost:3001/books', {
                title,
            });

            const updatedBooks = [
                ...books,
                response.data
            ];
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error creating book:', error);
        }
    };

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
