import { NavBarVertical } from '../components/NavBarVertical'

const ReportsView = () => {
    return (
        <>
            <NavBarVertical />
            <div className='ml-64'>
                <div className='flex justify-center items-center flex-row'>
                    <div className='bg-red-500 w-36 h-36 rounded-xl mt-10'>

                    </div>
                    <div className='bg-blue-500 w-1/2 h-36 rounded-xl mt-10'>

                    </div>
                    <div className='bg-green-500 w-1/2 h-36 rounded-xl mt-10'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportsView