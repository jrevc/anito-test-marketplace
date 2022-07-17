import { useEffect } from 'react';
import * as spinecanvas from '@esotericsoftware/spine-canvas';
// import * as spinegl from "@esotericsoftware/spine-webgl";
import './AnitoGL.css';
const spine = spinecanvas;
// const spine = spinegl;

const AnitoGL = (props) => {
    let lastFrameTime = Date.now() / 1000;
    let canvas, context;
    let assetManager;
    let skeleton, animationState, bounds;
    let skeletonRenderer;

    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    async function load() {
        canvas = document.getElementById(props.id);
        context = canvas.getContext('2d');
        // context.clearRect(0, 0, context.width, context.height);
        skeletonRenderer = new spine.SkeletonRenderer(context);

        // Load the assets.
        assetManager = new spine.AssetManager(process.env.PUBLIC_URL + '/spine/');
        assetManager.loadText(props.class + '.json');
        assetManager.loadTextureAtlas(props.class + '.atlas.txt');
        assetManager.setPremultipliedAlpha = true;
        await assetManager.loadAll();

        // Create the texture atlas and skeleton data.
        let atlas = assetManager.require(props.class + '.atlas.txt');
        let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
        let skeletonJson = new spine.SkeletonJson(atlasLoader);
        let skeletonData = skeletonJson.readSkeletonData(assetManager.require(props.class + '.json'));

        // Instantiate a new skeleton based on the atlas and skeleton data.
        skeleton = new spine.Skeleton(skeletonData);
        skeleton.setToSetupPose();
        skeleton.updateWorldTransform();
        bounds = skeleton.getBoundsRect();

        // Setup the Anito's skin
        let newSkin = new spine.Skin('custom-anito');
        newSkin.addSkin(skeletonData.findSkin('Body/body_' + props.body));
        newSkin.addSkin(skeletonData.findSkin('Hair/hair_' + props.hair));
        newSkin.addSkin(skeletonData.findSkin('Tail/tail_' + props.tail));
        newSkin.addSkin(skeletonData.findSkin('Eyes/eyes_' + props.eyes));
        skeleton.setSkin(newSkin);

        // Setup an animation state with a default mix of 0.2 seconds.
        var animationStateData = new spine.AnimationStateData(skeleton.data);
        animationStateData.defaultMix = 0.2;
        animationState = new spine.AnimationState(animationStateData);

        // Set the idle animation, looping.
        let idleAnim = Math.floor(Math.random() * 3) + 1;
        let animDelayIndex = Math.random();
        let animDelay = lerp(0.6, 1.1, animDelayIndex);
        animationState.addAnimation(0, 'idle_' + idleAnim, true, animDelay);

        // Start rendering.
        requestAnimationFrame(render);
    }

    function render() {
        // Calculate the delta time between this and the last frame in seconds.
        var now = Date.now() / 1000;
        var delta = now - lastFrameTime;
        lastFrameTime = now;

        // Resize the canvas drawing buffer if the canvas CSS width and height changed
        // and clear the canvas.
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Center the skeleton and resize it so it fits inside the canvas.
        skeleton.x = canvas.width / 2;
        skeleton.y = canvas.height - canvas.height * 0.1 + 10;
        let heightBase = 1.25;
        let heightMod = 1 + 0.05 * (props.hp / 2);
        let scale = (canvas.height / bounds.height) * (heightBase * heightMod);
        skeleton.scaleX = scale;
        skeleton.scaleY = -scale;

        // Update and apply the animation state, update the skeleton's
        // world transforms and render the skeleton.
        animationState.update(delta);
        animationState.apply(skeleton);
        skeleton.updateWorldTransform();
        skeletonRenderer.draw(skeleton);

        requestAnimationFrame(render);
    }

    useEffect(() => {
        load();
    });

    return <canvas id={props.id} className="anito-canvas"></canvas>;
};

export default AnitoGL;
