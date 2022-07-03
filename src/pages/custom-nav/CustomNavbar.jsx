import React from 'react';

import { Navbar, Button, Dropdown, Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { About } from '../about/About';

export const CustomNavbar = () => {
    return (
        <div>
            <Navbar className='bg-customDarkGreen'>
                <Navbar.Start>
                    <Dropdown>
                        <Button
                            color='ghost'
                            tabIndex={0}
                            className='lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </Button>
                        <Dropdown.Menu
                            tabIndex={0}
                            className='w-52 menu-compact mt-3'>
                            <Dropdown.Item>About Us</Dropdown.Item>
                            <Dropdown.Item>Projects 1</Dropdown.Item>
                            <Dropdown.Item>Projects 2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <a className='btn btn-ghost normal-case text-xl'>
                        Greenbar & Artisans
                    </a>
                </Navbar.Start>
                <Navbar.Center className='hidden lg:flex'>
                    <Menu horizontal className='p-0'>
                        <Menu.Item>
                            <Link to='/about' element={<About />} />
                        </Menu.Item>
                        <Menu.Item tabIndex={0}>
                            <a>Projects 1</a>
                        </Menu.Item>
                        <Menu.Item tabIndex={1}>
                            <a>Projects 2</a>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>Hello</Navbar.End>
            </Navbar>
        </div>
    );
};