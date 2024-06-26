import React, { useCallback } from 'react'
import Logo_Sakila from '../../assets/Logo_Sakila.png'
import { Button } from '../../components'
import icons from '../../utils/icons'
import { useNavigate } from 'react-router-dom'
import { path } from '../../utils/constant'
import Navigation from './Navigation'


const { CiCirclePlus } = icons


const Header = () => {
    const navigate = useNavigate();
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, []);

    return (
        <div className='w-1100'> 
            <div className='w-full flex items-center justify-between'>
                <img
                    src={Logo_Sakila}
                    alt='logo_Sakila'
                    className='w-[240px] h-[70px] object-contain' 
                />
                <div className='flex items-center gap-1'>
                    <small>Sakila xin chào!</small>
                    <Button 
                        text={'Đăng nhập'} 
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]' 
                        onClick={goLogin}
                    />
                    <Button 
                        text={'Đăng ký'} 
                        textColor='text-white' 
                        bgColor='bg-[#3961fb]' 
                    />
                    <Button 
                        text={'Đăng tin mới'} 
                        textColor='text-white' 
                        bgColor='bg-secondary2' 
                        IcAfter={CiCirclePlus} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
