import { SmoothScrollbar } from "@14islands/r3f-scroll-rig"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {

    const refContainer = useRef()
    let tlRef = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {
            tlRef.current = gsap.timeline()
                .to("#h1", {
                    x: 100,
                    duration: 1,
                    // repeat: -1,
                    yoyo: true
                })
                .to("#h2", {
                    x: 100,
                    duration: 1,
                    // repeat: -1,
                    yoyo: true
                })
                .to("#h3", {
                    x: 100,
                    duration: 1,
                    // repeat: -1,
                    yoyo: true
                })
                .to("#h4", {
                    x: 100,
                    duration: 1,
                    // repeat: -1,
                    yoyo: true,
                    scrollTrigger: {
                        trigger: "#h4",
                        scrub: 1
                    }
                })
                .to("#h5", {
                    x: 100,
                    duration: 1,
                    // repeat: -1,
                    yoyo: true,
                    scrollTrigger: {
                        trigger: "#h4",
                        scrub: 2
                    }
                })
        }, refContainer)

        return () => ctx.revert()
    }, [])

    return (
        <SmoothScrollbar>
            {(bind) => (
                <div className="" ref={refContainer} >
                    <h1 id="h1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                    <h1 id="h3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptas sunt quis temporibus voluptate repellat veniam magnam placeat beatae, illum quaerat quae ipsum inventore ut, adipisci cumque asperiores! Perferendis exercitationem mollitia laudantium unde quas sint laboriosam incidunt, quasi pariatur adipisci doloribus deserunt harum impedit vel, rem quaerat, eos atque sequi.</h1>
                </div>
            )}
        </SmoothScrollbar>
    )
}

export default HeroSection
