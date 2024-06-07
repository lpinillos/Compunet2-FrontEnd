import { NavBarVertical } from '../components/NavBarVertical'
import destinoBg from '../images/destinoBackground.jpg';
const CatalogoDestinoView = () => {
    return (
        <>
            <NavBarVertical />
            <div className='ml-64 p-4 flex justify-center items-center'>
                <div className='relative w-3/4 h-48 rounded-lg mt-10 flex justify-center items-center overflow-hidden' style={{ backgroundImage: `url(${destinoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <label className='relative text-white font-semibold text-2xl z-10'>Descubre, Planea y vive la aventura!</label>
                </div>
            </div>
        </>
    )
}

export default CatalogoDestinoView;