<script>
export default {
  data() {
    return {
      term: "",
      emit: ["search-title"],
    };
  },
  props: {
    headerList: Object,
  },
};
</script>

<template>
  <header>
    <nav
      class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand flex-grow-1" href="#"
          ><img src="/imgs/assets/Logo.png" alt=""
        /></a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul
            v-for="listNav in headerList"
            :key="listNav.id"
            class="navbar-nav me-auto mb-2 mb-lg-0"
          >
            <li v-if="listNav.id !== 3 && listNav.id !== 7" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >{{ listNav.title }} {{ console.log(listNav.id) }}</a
              >
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              v-for="listNav in headerList"
              v-show="listNav.id == 3 || listNav.id == 7"
              class="nav-item dropdown"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >{{ listNav.title }}
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item" v-for="listEandS in listNav.list">
                  <a class="nav-link active" aria-current="page" href="#"
                    >{{ listEandS }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form
            @submit.prevent="$emit('search-title', term)"
            class="d-flex"
            role="search"
          >
            <input
              v-model="term"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <img src="/imgs/assets/image (23).svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped as *>
.bg-body-tertiary {
  background-color: var(--black) !important;
}

header {
  color: var(--white);
  button {
    border: 0;

    img {
      filter: invert(95%) sepia(0%) saturate(19%) hue-rotate(14deg)
        brightness(105%) contrast(104%);
    }
  }
}
</style>
