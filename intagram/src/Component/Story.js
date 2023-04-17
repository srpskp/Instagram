import React from 'react'
import payel from '../Component/payel.jpg'
import farid from '../Component/farid.jpg'
import pial from '../Component/pial.jpg'
import dristy from '../Component/dristy.jpg'
import tanveer from '../Component/tanveer.jpg'
import rimi from '../Component/rimi.jpg'
import nadimvai from '../Component/nadimvai.jpg'
import pari from '../Component/pari.jpg'
import profile from '../Component/peofile.jpg'
import kaiful from '../Component/kaiful.jpg'
import mr from '../Component/mr.jpg'
import pulp from '../Component/pulp.jpg'
import '../Component/Story.css'
import Post from './Post'
import Name from './Name'
import Subtext from './Subtext'
import Buttons from './Buttons'
import ProfileImg from './ProfileImg'

export default function Story() {
    return (
        <>
            <section className="main">
                <div className="wrapper">
                    <div className="left-col">
                        <div className="status-wrapper">
                            <div className="status-card">
                                <ProfileImg src={payel} />
                                <Name name='payeeelll' />
                            </div>
                            <div className="status-card">
                                <ProfileImg src={pari} />
                                <Name name='oh_achah...' />

                            </div>
                            <div className="status-card">
                                <ProfileImg src={pial} />
                                <Name name='hassan_pial' />
                            </div>
                            <div className="status-card">

                                <ProfileImg src={dristy} />
                                <Name name='maybedristy' />
                            </div>
                            <div className="status-card">
                                <ProfileImg src={tanveer} />
                                <Name name='tanveer__ahamed' />
                            </div>
                            <div className="status-card">
                                <ProfileImg src={rimi} />
                                <Name name='rima_akter_25' />
                            </div>
                            <div className="status-card">
                                <ProfileImg src={nadimvai} />
                                <Name name='ismail_hoss...' />
                            </div>
                            <div className="status-card">
                                <ProfileImg src={farid} />
                                <Name name='naf1r_' />
                            </div>
                        </div>


                        <div className="all-post">
                            <Post />
                        </div>
                    </div>

                    <div class="right-col">
                        <div className="profile-card">

                            <ProfileImg src={profile} />
                            <div>
                                <Name name='ovito_uzumaki' />
                                <Subtext text='Md Obidur Rahman (Ovi)' />
                            </div>
                            <Buttons btn='switch' />
                        </div>
                        <p className="suggestion-text">Suggestions for you <Buttons btn='See All' /> </p>
                        <div className="profile-card">

                            <ProfileImg src={kaiful} />
                            <div>
                                <Name name='kaiful_islam_safin' />
                                <Subtext text='Followed by __hasnat_ali_siddique_' />
                            </div>
                            <Buttons btn='follow' />
                        </div>
                        <div className="profile-card">

                            <ProfileImg src={pulp} />
                            <div>
                                <Name name='ovito_uzumaki' />
                                <Subtext text='New to Instagram' />

                            </div>
                            <Buttons btn='follow' />
                        </div>
                        <div className="profile-card">

                            <ProfileImg src={farid} />
                            <div>
                                <Name name='ijaj_emon_' />
                                <Subtext text='Followed by g.s.hasan + 2 more' />
                            </div>
                            <Buttons btn='follow' />
                        </div>
                        <div className="profile-card">

                            <ProfileImg src={pari} />
                            <div>
                                <Name name='ku_tu_sh' />
                                <Subtext text='Followed by tasir.01 + 1 more' />
                            </div>
                            <Buttons btn='follow' />
                        </div>
                        <div className="profile-card">

                            <ProfileImg src={mr} />
                            <div>
                                <Name name='m_r_bhuiyan726' />
                                <Subtext text='Followed by md_alauddin_nepu' />
                            </div>
                            <Buttons btn='follow' />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
