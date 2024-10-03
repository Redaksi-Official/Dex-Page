import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    Website ini gue buat dengan <a  target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">sepenuh hati.</a> <br/> Created by <a href="https://www.instagram.com/d.dexx_/" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">d.dexx_</a> using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js</a> and 
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> Tailwind CSS</a>. 
                    The inspiration for the design comes from <a  target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Otak </a> 
                    dan <a target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Hati</a>. 
                </div>
                <div className='flex flex-row justify-between'>
                    <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                    <a href="/privacy" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Privacy Statement</a>
                    <span>{props.data.name} | 2024</span>
                </div>
            </div>
        </div>
    )
}

export default Credits