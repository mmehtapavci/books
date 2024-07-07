import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './styles.css';

function App() {
    const [books, setBooks] = useState([]);


    // Kitabı kimliğe göre düzenle fonksiyonu
    // editBookById adında bir fonksiyon tanımlanıyor, bu fonksiyon iki parametre alır: id ve newTitle.

    const editBookById = (id, newTitle) => {
        // books adlı bir diziyi map fonksiyonu ile dolaşıyoruz. map, her bir eleman için belirtilen işlemleri yapar ve yeni bir dizi döner.
        const updatedBooks = books.map((book) => {
            // Eğer mevcut book objesinin id'si, verilen id ile eşleşiyorsa:
            if (book.id === id) {
                // O zaman bu book objesinin title'ını newTitle ile değiştir ve yeni bir obje olarak geri döndür.
                return { ...book, title: newTitle };
            }
            // Eğer id'ler eşleşmiyorsa, book objesini olduğu gibi geri döndür.
            return book;
        });
        // setBooks fonksiyonu ile updatedBooks dizisini state olarak ayarla.
        setBooks(updatedBooks);
    };


    // Kitabı sil Fonksiyonu
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    // Kitap oluştur fonksiyonu
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title,
            },
        ];
        setBooks(updatedBooks);
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
