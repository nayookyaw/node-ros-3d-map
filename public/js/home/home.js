
const WS_ROS_BRIDGE_PROTOCOL = "ws"
const WS_ROS_BRIDGE_IP = "localhost"; // replace actual ros bridge IP
const WS_ROS_BRIDGE_PORT = "9090"; // replace the actual port

const WS_ROS_BRIDGE_URL =  WS_ROS_BRIDGE_PROTOCOL + "://" + WS_ROS_BRIDGE_IP + ":" + WS_ROS_BRIDGE_PORT;

POINT_CLOUD_2_TOPIC = "/points_map";

var viewer;

window.addEventListener('load', function() {
    const homeInstance = new Home();
    homeInstance.displayMap();
});

window.addEventListener('resize', function() {
    console.log (viewer)
});

class Home {

    constructor() {}

    displayMap () {
        // Connect to the ROS bridge
        var ros = new ROSLIB.Ros({
            url : WS_ROS_BRIDGE_URL  // Ensure rosbridge_websocket is running on this port
        });
        
        // Create a 3D viewer
        viewer = new ROS3D.Viewer({
            divID : 'viewer',
            width : document.body.clientWidth,
            height : document.body.clientHeight * 0.8,
            antialias : true
        });
        
        // Add a grid to the scene
        viewer.addObject(new ROS3D.Grid({
            color: '#555555', // Adjust grid color
            cellSize: 1.0,    // Adjust grid cell size
            num_cells: 20     // Number of grid cells
        }));
        
        // Add PointCloud2 client to visualize 3D data
        var cloudClient = new ROS3D.PointCloud2({
            ros : ros,
            rootObject : viewer?.scene,
            topic : POINT_CLOUD_2_TOPIC,  // Replace with actual PointCloud2 topic name
            material : { size: 0.05, color: 0xffffff }  // Set point size and color
        });
    }
}