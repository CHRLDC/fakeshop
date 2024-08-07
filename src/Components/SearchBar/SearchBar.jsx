import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch, onClose }) {

    // Définir la valeur de la barre de recherche par défaut
    const [searchTerm, setSearchTerm] = useState('');

    // Gère le changement du terme de recherche et déclenche la recherche
    const handleSearchChange = (event) => {
        // Récupérer la valeur de l'input
        const value = event.target.value;
        // Mettre à jour la valeur de la recherche
        setSearchTerm(value);
        // Déclenche la recherche pour cette valeur
        onSearch(value);
    };

    return (
        <div className="search-bar">
            {/* Icône de loupe */}
            <span className="picto-loup"></span>
            {/* Champ de saisie pour la recherche */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for products..."
            />
            {/* Icône de croix pour fermer la barre de recherche */}
            <span className="picto-cross" onClick={onClose}></span>
        </div>
    );
}
