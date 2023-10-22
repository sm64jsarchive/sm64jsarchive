import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { castle_grounds_seg7_dl_0700C768, castle_grounds_seg7_dl_0700C728, castle_grounds_seg7_dl_0700C6E8, castle_grounds_seg7_dl_0700C6A8, castle_grounds_seg7_dl_0700C670 } from "./model.inc"
import { SHADOW_CIRCLE_PLAYER } from "../../../../../game/Shadow"


export const castle_grounds_geo_000660 = [
    { command: Geo.node_shadow, args: [SHADOW_CIRCLE_PLAYER, 0xB4, 100] },
    { command: Geo.open_node },

    { command: Geo.node_culling_radius, args: [1000] },
    { command: Geo.open_node },
    { command: Geo.node_scale, args: [0x00, 10000] },
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] }, 
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, castle_grounds_seg7_dl_0700C768] }, 
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 459, 0, 0, castle_grounds_seg7_dl_0700C728] }, 
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 460, 0, 0, castle_grounds_seg7_dl_0700C6E8] }, 
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 345, 0, 0, castle_grounds_seg7_dl_0700C6A8] }, 
    { command: Geo.open_node },
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 287, 0, 0, castle_grounds_seg7_dl_0700C670] }, 
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },

    { command: Geo.close_node },
    { command: Geo.node_end }
]