import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {

    const { id } = useParams();

    return (
        <div>
            <h1>Ici c'est ProductDetailPage</h1>
            <p>GetId: {id}</p>
        </div>
    );
}