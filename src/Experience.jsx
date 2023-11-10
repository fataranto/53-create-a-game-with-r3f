import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.js'


export default function Experience()
{

    const blocksCount = useGame((state) => state.blocksCount)
    const blockSeed = useGame((state) => state.blockSeed)

    return <>

        <color args={ [ '#bdedfc' ] } attach="background" />

        <OrbitControls makeDefault />

        <Physics>
            <Lights />
            <Level count={ blocksCount } seed = { blockSeed }/>
            <Player />
        </Physics>
        


    </>
}