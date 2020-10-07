<template>
    <div>
        <ul>
            <li>
                <router-link to="/" class="link">
                    <img :src="
							$route.meta.isActive===0? '/image/tab-home-active.png' : '/image/tab-home-defaut.png'
						" alt="" />
                       
                    <span>学烘焙</span>
                </router-link>
            </li>
            <li>
                <router-link to="/bankingring"  class="link"><img :src="
							$route.meta.isActive===1? '/image/tab-ring-active.png' : '/image/tab-ring-defaut.png'
						" alt="" />
                    <span>烘焙圈</span></router-link>
            </li>
            <li>
                <router-link to="/qa"  class="link"><img :src="
							$route.meta.isActive===2? '/image/tab-qa-active.png' : '/image/tab-qa-defaut.png'
						" alt="" />
                    <span>问答</span></router-link>
            </li>
            <li>
                <router-link to="/personal"  class="link"><img :src="
							$route.meta.isActive===3? '/image/tab-personal-active.png' : '/image/tab-personal-defaut.png'
						" alt="" />
                    <span>小窝</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tarbar",
        data() {
            return {
                
            };
        },
    };
</script>
<style lang="scss" scoped>
    div {
        position: fixed;
        bottom: 0;
        width: 100%;
       background-color: #fff;

        ul {
            display: flex;
            height: 49px;

            li {
                flex: 1;

                .link {
                    text-decoration: none;
                   width: 100%;
                   height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 25px;
                        height: 25px;
                    }

                    span {
                        color: #999999;
                        font-size: 11px;

                        &.active {
                            color: #313131;
                        }
                    }
                }
            }
        }
    }
</style>