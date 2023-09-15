import UnderConstruction from '@/components/UnderConstruction'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

export const metadata: Metadata = {
    title: 'Appropriateness'
}

const page = () => {
    return (
        // <UnderConstruction />
        <main className='container min-w-full px-4 py-[60px] md:px-12 lg:px-32'>
            <section className='grid justify-items-center max-w-screen-xl'>
                <ul className="menu menu-horizontal bg-quaternary rounded-box my-6">
                    <li>
                        <a className="tooltip" data-tip="Appropriateness">
                            <i className="ri-shield-check-line text-2xl"></i>
                        </a>
                    </li>
                    <li>
                        <Link href='/repayment' className="tooltip" data-tip="Repayment">
                            <i className="ri-treasure-map-line text-2xl"></i>
                        </Link>
                    </li>
                </ul>
            </section>

            {/* MENU */}
            <section className='grid p-6 bg-quaternary rounded-2xl'>
                <h2 className='mb-6'>Cek Kelayakan Peminjaman Utang</h2>

                <div className='grid md:grid-cols-2 gap-16 md:gap-12'>
                    {/* INPUT */}
                    <div className='grid gap-6'>

                        <form className='grid gap-6' action="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Pendapatan / bln</span>
                                </label>
                                <input type="number" placeholder="..." className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Pengeluaran / bln</span>
                                </label>
                                <input type="number" placeholder="..." className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Utang yang akan dipinjam</span>
                                </label>
                                <input type="number" placeholder="..." className="input input-bordered w-full" />
                            </div>

                            <div className='flex gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Tenor / bln</span>
                                    </label>
                                    <input type="number" placeholder="..." className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Bunga</span>
                                    </label>
                                    <div className='join'>
                                        <input type="number" placeholder="..." className="input input-bordered join-item w-full max-w-xs" />
                                        <div className="indicator">
                                            <button className="btn join-item btn-disabled">%</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={'/'}
                                style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }}
                                className='inline-flex gap-2 items-center justify-center rounded-lg py-2 px-4 text-white font-mono text-base text-center uppercase lg:w-fit lg:px-6'>
                                <i className="ri-bard-fill text-base"></i>
                                Generate
                            </Link>
                        </form>
                    </div>

                    {/* OUTPUT */}
                    <div className='grid justify-items-center gap-6 h-fit'>
                        <div className='border-2 border-[#353539] p-4 rounded-lg'>
                            <p>
                                Sayangnya, prediksi pembayaran yang harus anda bayar melebihi melebihi 70% dari pendapatan bulanan Anda, sehingga kami tidak dapat merekomendasikan pinjaman pada saat ini.
                            </p>
                        </div>

                        <div className='w-full overflow-hidden'>
                            <h3 className='mb-4 md:mb-6'>Rekomendasi Strategi Pelunasan dalam Bulan</h3>
                            <div className="overflow-x-auto">
                                <ul className="steps">
                                    <li className="step step-info">250k</li>
                                    <li className="step step-info">200k</li>
                                    <li className="step step-info">150k</li>
                                    <li className="step step-info">100k</li>
                                </ul>
                            </div>
                        </div>


                        <a
                            href='/'
                            // style={{ backgroundImage: 'linear-gradient(313deg, #00FF68 -0%, #6843EC 100%)' }}
                            className='inline-flex items-center bg-transparent rounded-full py-2 px-4 border-2 border-[#353539] text-tertiary font-mono text-base uppercase gap-2 lg:w-fit lg:px-6'>
                            <i className="ri-restart-line"></i>
                            regenerate
                        </a>
                    </div>
                </div>


            </section>
        </main>
    )
}

export default page