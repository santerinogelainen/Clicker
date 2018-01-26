import * as React from "react";
import {Map} from "../core/map";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";
import * as THREE from "three";

export class MapCanvasFrame extends React.Component<Props> {

    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    width: number;
    height: number;

    constructor(props: Props) {
        super(props);
    }

    calcSize() {
        this.width = $("#canvas-frame")[0].clientWidth;
        this.height = $("#canvas-frame")[0].clientHeight;
    }

    onWindowResize = (e) => {
        console.log("resizing");
        console.log("width: " + this.width);
        console.log("height: " + this.height);
        this.calcSize();
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
    }

    componentDidMount() {
        this.calcSize();
        this.scene = new THREE.Scene(); 
        this.camera = new THREE.PerspectiveCamera( 75, this.width/this.height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        $("#canvas-frame")[0].appendChild(this.renderer.domElement as HTMLElement);
        this.renderer.render(this.scene, this.camera);

        // set window event listener
        window.addEventListener("resize", this.onWindowResize);
    }

    render() {
        return (
            <Frame frameId="canvas"></Frame>
        );
    }

}