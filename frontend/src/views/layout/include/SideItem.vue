<template>        
    <!-- <li class="nav-item">
        <router-link class="nav-link" :to="link" :class="{active : isActive() }">
            <i class="nav-icon" :class="icon" v-if="icon"></i>
            <p><slot/></p>
        </router-link>
    </li> -->

    
    <li class="nav-item" v-if="router && router.name">
        <router-link class="nav-link" :to="router.name">
                <i class="nav-icon" :class="icon"></i> 
                <p>{{ name }}</p>
        </router-link>
    </li>
    <li :class="getType" v-else>
        {{ isHeader ? name : '' }}
        <router-link :to="link" class="nav-link" v-if="!isHeader">
            <i class="nav-icon" :class="icon"></i>
            <p>{{ name }}
                <i class="right fas fa-angle-left"></i>
            </p>
        </router-link>

         <ul class="nav nav-treeview" v-if="items.length > 0">
            <li class="nav-item" v-for="(item,index) in items" :data="item" :key="index" >
                <router-link class="nav-link" :to="item.router.name">
                    <i class="nav-icon" :class="item.icon"></i><p>{{ item.name }}</p>
                </router-link>
            </li>
         <!--   <li v-else>
                <template v-if="item.link">
                    <a :href="item.link">
                        <i :class="item.icon"></i><p>{{ item.name }}</p>
                    </a>
                </template>
                <template v-else>
                    <a>
                        <i :class="item.icon"></i><p>{{ item.name }}</p>
                    </a>
                </template>
            </li>-->
        </ul> 
    </li>
</template>

<script>
export default {
    name:'side-item',
    props : {
        type : {
            type : String,
            default : 'item',
        },
        isHeader : {
            type : Boolean,
            default : false,
        },
        icon : {
            type : String,
            default : null,
        },
        name : {
            type : String,
        },
        items : {
            type : Array,
            default () {
                return []
            }
        },
        router: {
            type : Object,
            default () {
                return {
                    name: ''
                }
            }
        },
        link : {
            type : String,
            default : ''
        }
    },
    created () {

    },
    computed : {
        getType () {
            if(this.isHeader) {
                return 'nav-header'
            }
            return this.type === 'item' ? '' : 'nav-item'
        }
    },
    // methods : {
    //     isActive(){
    //         if(typeof this.router. === "object"){
    //             return this.$route.name === this.link.name;
    //         } else {
    //             return this.$route.path === this.link;
    //         }
    //     }
    // }
}

</script>